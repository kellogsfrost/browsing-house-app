const app = express();


app.use(express.urlencoded({extended: false}));
app.use(express.json());







app.listen(process.env.PORT, () => {
    console.log(`You're listening to port ${process.env.PORT}....` || 3001)
})