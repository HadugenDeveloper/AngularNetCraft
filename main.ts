import {Artist} from './models/artist.model';
import {Form} from './Controllers/form.controller';

// Initialize form object
let form = new Form();

//Add Events

//Add artist on click event
document.getElementById("btnAddArtist").addEventListener("click", function(){
    
    let name = (<HTMLInputElement>document.getElementById("inputName"));
    let image = (<HTMLInputElement>document.getElementById("inputImage"));
    let url = (<HTMLInputElement>document.getElementById("inputUrl"));

    let art = new Artist(name.value,image.value,url.value);
    
    if(form.addArtist(art)){

		// In case of a successful add of an artist, delete message
		document.getElementById("spnRes").innerHTML = "";	

    	//Draw new video div on screen
    	let VideoHtml = document.createElement("div"); 
    	VideoHtml.className = "video col-sm-4";	
    	VideoHtml.innerHTML = `    							
		    					 <div class="form-group row noMarginBottom borderGray1Px margin1px">
									<div class="form-group col-sm-4 textAlignLeft noMarginBottom">
										<img class="video-img imgCircle" alt="Artist Image" src="${art.image}">
									</div>
									<div class="form-group col-sm-8 textAlignLeft noMarginBottom">
										<div class="row">
											<label class="col-sm-12">${art.name}</label>
											<a class="col-sm-12" href="${art.youtubeUrl}">watch youtube video</a>
										</div>
									</div>
								</div>
							  `;

    (<HTMLElement>document.getElementById("videoContainer")).appendChild(VideoHtml);

    }// end if form.addArtist(art)
    else{

    	document.getElementById("spnRes").innerHTML = "Please Fill All Fields";	
    	document.getElementById("spnRes").style.color = "red";	
    }
});

//Clear Form on click event
document.getElementById("btnClear").addEventListener("click", function(){
    
    (<HTMLInputElement>document.getElementById("inputName")).value = "";
    (<HTMLInputElement>document.getElementById("inputImage")).value = "";
    (<HTMLInputElement>document.getElementById("inputUrl")).value = "";
       document.getElementById("spnRes").innerHTML = "";
});
