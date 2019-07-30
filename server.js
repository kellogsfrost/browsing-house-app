import Axios from "axios";

const app = express();


app.use(express.urlencoded({extended: false}));
app.use(express.json());



app.get('place/api', function(req, res){
    //Axios.get()
})



app.listen(process.env.PORT, () => {
    console.log(`You're listening to port ${process.env.PORT}....` || 3001)
})