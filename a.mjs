import http from 'http';


const response =()=>"hallo ik ben Finn"
const listener = (req,res) => {
    
    res.end(response());
};
http.createServer(listener).listen(3030);




