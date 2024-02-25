"use client";

import { useRouter } from "next/navigation";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";
// import  ReactQuill, { UnprivilegedEditor } from "react-quill"
import { Button } from "~/components/ui/button";
import { api } from "~/trpc/react";

export function CreateIssue() {
  const router = useRouter();
  const [issue, setIssue] = useState("");

  const createIssue = api.issue.create.useMutation({
    onSuccess: () => {
      router.refresh();
      setIssue("");
    },
  });
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        createIssue.mutate({ name: issue });
      }}
    >
      <div className="flex items-center justify-evenly p-4 text-white">
        <div className="w-[90vw]">
          <input
            className="bg-gray-500"
            // value={issue}
            // theme="snow"
            value={issue}
            onChange={(e) => setIssue(e.target.value)}
          />
        </div>
        <Button
          className="rounded px-4 py-2 font-bold text-white duration-200"
          variant={"outline"}
          disabled={createIssue.isLoading}
        >
          {createIssue.isLoading ? "creating...." : "Create"}
        </Button>
      </div>
    </form>
  );
}
