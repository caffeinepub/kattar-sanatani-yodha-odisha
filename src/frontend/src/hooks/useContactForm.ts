import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';

export function useContactForm() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  const submitMutation = useMutation({
    mutationFn: async ({ name, email, message }: { name: string; email: string; message: string }) => {
      if (!actor) {
        throw new Error('Actor not initialized');
      }
      await actor.submitContactForm(name, email, message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['submissions'] });
    },
  });

  return {
    submitForm: (name: string, email: string, message: string) =>
      submitMutation.mutateAsync({ name, email, message }),
    isSubmitting: submitMutation.isPending,
    error: submitMutation.error,
  };
}
