import { useParams } from "react-router-dom";

export function FeedbackPage() {
const {userName} = useParams();
return(
    <h1>You rated us {userName}.</h1>
)
}