import List "mo:core/List";
import Runtime "mo:core/Runtime";

actor {
  let contactSubmissions = List.empty<ContactSubmission>();

  type ContactSubmission = {
    name : Text;
    email : Text;
    message : Text;
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
    contactSubmissions.toArray();
  };

  public shared ({ caller }) func deleteSubmission(index : Nat) : async () {
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
