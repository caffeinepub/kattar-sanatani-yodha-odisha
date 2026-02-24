import List "mo:core/List";
import Map "mo:core/Map";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";
import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";

actor {
  // Initialize the user system state
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  let contactSubmissions = List.empty<ContactSubmission>();

  type ContactSubmission = {
    name : Text;
    email : Text;
    message : Text;
  };

  public type UserProfile = {
    name : Text;
  };

  let userProfiles = Map.empty<Principal, UserProfile>();

  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can view profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  public shared ({ caller }) func submitContactForm(name : Text, email : Text, message : Text) : async () {
    let contactSubmission : ContactSubmission = {
      name;
      email;
      message;
    };
    contactSubmissions.add(contactSubmission);
  };

  public query ({ caller }) func getSubmissions() : async [ContactSubmission] {
    // Only allow admins to view submissions in the admin dashboard
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can view submissions");
    };
    contactSubmissions.toArray();
  };

  public shared ({ caller }) func deleteSubmission(index : Nat) : async () {
    // Only allow admins to delete submissions
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can delete submissions");
    };

    if (index >= contactSubmissions.size()) {
      Runtime.trap("Index out of bounds. Submission could not be deleted.");
    };
    let array = contactSubmissions.toArray();
    contactSubmissions.clear();
    for (i in array.keys()) {
      if (i != index) {
        contactSubmissions.add(array[i]);
      };
    };
  };
};
