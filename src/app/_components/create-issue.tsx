"use client"

import { useRouter } from "next/navigation";
import 'react-quill/dist/quill.snow.css'; 
import  ReactQuill, { UnprivilegedEditor } from "react-quill"
import { Button } from "~/components/ui/button";
import { useState } from "react";
import { api } from "~/trpc/react";

export function CreateIssue(){
    const router = useRouter();
    const [issue, setIssue] = useState("");

    const handleChange = (content: string, delta: any, source: string, editor: UnprivilegedEditor) => {
        const text: string = editor.getText();
        console.log(text)
        setIssue(text);
      };

    const createIssue = api.issue.create.useMutation({
        onSuccess: () =>{
            router.refresh();
            setIssue("");
        }
    });
    return (
        <form
            onSubmit={(e) =>{
                e.preventDefault();
                createIssue.mutate({name: issue});
            }}
        >
        <div className='text-white flex justify-evenly items-center p-4'>
        <div className='w-[90vw]'>
          <ReactQuill 
            className='bg-gray-900'
            // value={issue}
            theme="snow" 
            onChange={handleChange}         
           />
        </div>
        <Button className='duration-200 text-white font-bold py-2 px-4 rounded' variant={"outline"} disabled={createIssue.isLoading} >{createIssue.isLoading ? "creating...." : "Create"}</Button>
      </div>
      </form>
    )
}