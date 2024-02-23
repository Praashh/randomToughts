"use client"
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'; 
import { Button } from "~/components/ui/button";
import { CreateIssue } from "../_components/create-issue";
export default  function Page(){
    function handleChange(){
        console.log("ji")
    }
    return (<>
        
        <CreateIssue/>
    </>)
}