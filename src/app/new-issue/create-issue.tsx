import { Checkbox } from "@radix-ui/react-checkbox"
import { Label } from "@radix-ui/react-label"
import { Select, SelectValue } from "@radix-ui/react-select"
import Link from "next/link"
import { Button } from "~/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "~/components/ui/card"
import { Input } from "~/components/ui/input"
import { Textarea } from "~/components/ui/textarea";
import { useRouter } from "next/navigation"
import { api } from "~/trpc/react";
import { useState } from "react"
import Image from "next/image"


export default function CreateIssue() {
  

  const router = useRouter();
  const [title, setTitle] = useState<string>("");
  const [desc, setDes] = useState<string>("");

  const createIssue = api.issue.create.useMutation({
    onSuccess: () => {
      router.refresh();
      setTitle("");
      setDes("");
    },
  });


  return (
    <form action="submit"
        onSubmit={(e) => {
          e.preventDefault();
          createIssue.mutate({ title: title, description: desc });
        }}
    >
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-center">Submit a new issue</CardTitle>
          <CardDescription className="text-center">Your issue{"'"}s title is the first impression. Make it count.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="title">Title</Label>
            <Input id="title" placeholder="Briefly describe the issue" onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              className="min-h-[150px]"
              id="description"
              placeholder="Write a detailed description of the issue"
              onChange={(e) => setDes(e.target.value)}
            />
          </div>
          {/* <div>
            <Label>Labels</Label>
            <div className="flex items-center space-x-2">
              <Checkbox id="bug" />
              <Label className="cursor-pointer" htmlFor="bug">
                ure
              </Label>
              <Checkbox id="feature" />
              <Label className="cursor-pointer" htmlFor="feature">
                Feature
              </Label>
            </div>
          </div> */}
        </CardContent>
        <CardFooter>
        <Input id="picture" type="file" />
        </CardFooter>
      </Card>
      {
        title && desc && 
      <Card>
        <CardHeader>
          <CardTitle>Preview</CardTitle>
          <CardDescription>This is how your issue will appear to others.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="prose max-w-none">
            <h1>{title}</h1>
            <p>{desc}</p>
          </div>
        </CardContent>
      </Card>
    }
      <div className="flex w-full justify-center items-center max-w-full">
        <Button
          variant={"default"}
          className="w-full"
          disabled={createIssue.isLoading}
        >
          {createIssue.isLoading ? "creating...." : "Create"}
        </Button>
      </div>
    </div>
    </form>
  )
}

