import {Navigate, createBrowserRouter} from 'react-router-dom';
import { RatingForm, ratingFormAction } from './components/RatingForm';
import { FeedbackPage } from './components/FeedbackPage';

const router  = createBrowserRouter([
  {
    path:'/',
    element:<Navigate to={"/rating"}/>,
  },
  {
    path:'/rating',
    element:<RatingForm/>,
    action: ratingFormAction
  },
  {
    path:'/feedback/:rating',
    element:<FeedbackPage/>
  }
])

export default router;