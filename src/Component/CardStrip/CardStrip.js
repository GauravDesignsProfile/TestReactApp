import './CardStrip.css';
import Axios from "axios";
import FileDownload from "js-file-download";
function CardStrip(props){
    /*const downloadFileAtURL = (url,filename) => {
        fetch(url).then((response) => response.blob()).then((blob) => {
            const blobURL = window.URL.createObjectURL(new Blob([blob]));
            const aTag = document.createElement('a');
            aTag.href=blobURL;
            aTag.setAttribute('download',filename);
            document.body.appendChild(aTag);
            aTag.click();
            aTag.remove();
        })
    }*/
    const download=(e,url,filename)=>{
        e.preventDefault()
        Axios({
            url: url,
            method: "GET",
            responseType: "blob"
        }).then((res)=>{
            console.log(res);
            FileDownload(res.data,filename);
        })
    }
    return(
        <div className="CardStrip">
            <div  style={{display: `flex`}}>
                <img src={props.Image} alt=""/>
                <div className="Tdetails">
                    <h3>{props.TopicName}</h3>
                    <p>{props.Category}</p>
                </div>
            </div>
            <button onClick={(e)=>{download(e,props.FileURL,props.filename)}}>Download</button>
        </div>
    );
}

export default CardStrip;