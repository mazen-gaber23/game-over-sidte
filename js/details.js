export class details{
    constructor(){

    }
    close(){
        let close=document.querySelector('.btn-close');
        close.addEventListener('click',function(){
            
            document.querySelector('.nav').classList.remove('d-none');
            document.querySelector('.games').classList.remove('d-none');
            document.querySelector('.details').classList.add('d-none');
        })
    }
}