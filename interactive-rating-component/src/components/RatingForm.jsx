import { Form, redirect } from "react-router-dom";

export function RatingForm(){
    return(
        <Form method="post">
            <div>
               <input type="button" name="stars" value="5"/>
            </div>
            <div>
                <input type="text" name="userName" placeholder="name" />
            </div>
            <button type="submit">Submit</button>
        </Form>
    )
}


export async function ratingFormAction({request}){
    const formData = await request.formData();
    console.log(formData.get('stars'))
    return redirect(`/feedback/${formData.get('stars')}`)
}