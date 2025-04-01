"use client";

import { useRouter } from "next/navigation";
import { FieldErrors, useForm, UseFormRegister,  } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema, User } from "@/lib/validations/form";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  useMutation,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
interface InputFieldProps {
    id: keyof User;
    label: string;
    register: UseFormRegister<User>;
    errors: FieldErrors<User>;
  }
const queryClient = new QueryClient();

export default function AddUserPage() {
  return (
    <QueryClientProvider client={queryClient}>
      <AddUserForm />
    </QueryClientProvider>
  );
}

function AddUserForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    resolver: zodResolver(userSchema),
  });

  const mutation = useMutation({
    mutationFn: async (newUser: User) => {
      const res = await fetch("/api/add-user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      });
      if (!res.ok) throw new Error("Failed to add user");
      return res.json();
    },
    onSuccess: () => {
      alert("User added successfully");
      router.push("/");
    },
    onError: (error) => {
      alert("Error adding user: " + String(error));
    },
  });

  const onSubmit = (data: User) => {
    mutation.mutate(data);
  };

  return (
    <div className="flex justify-center items-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Add User</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <InputField id="name" label="Name" register={register} errors={errors} />
            <InputField id="email" label="Email" register={register} errors={errors} />
            <InputField id="phoneNumber" label="Phone Number" register={register} errors={errors} />
            <Button type="submit" className="w-full" disabled={mutation.isPending}>
              {mutation.isPending ? "Submitting..." : "Submit"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

function InputField({ id, label, register, errors }: InputFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium">
        {label}
      </label>
      <input
        id={id}
        {...register(id)}
        className="mt-1 block w-full border rounded-md p-2"
      />
      {errors[id] && <p className="text-red-500 text-sm">{errors[id]?.message}</p>}
    </div>
  );
}
