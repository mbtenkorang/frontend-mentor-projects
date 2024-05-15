
const Button = ({btnText}) =>(
    <button name="rating" value={btnText}>{btnText}</button>
);


const createArray = length =>[...Array(length)];

export default function RatingButton({totalButtons = 5}) {
    return createArray(totalButtons).map((n,i) => <Button key={i} btnText={i+1}/>)
}