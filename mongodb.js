const mongoose = require('mongoose');
let compass_url = 'mongodb://localhost:27017/sampledb'
let mongodb_url = "mongodb+srv://Abhi:Abhi#815@cluster0.bm5b8gi.mongodb.net/firstdb?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(compass_url).then(()=>{
    console.log(("db connected"))
})
.catch((err)=>{
    console.log(err);
});