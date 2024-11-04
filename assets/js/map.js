document.addEventListener("DOMContentLoaded", (event)=>{

    setTimeout(() => {
        document.querySelector("#load-iframe-map").innerHTML=`
        <iframe class="contact__iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30386.04983778893!2d-63.20880751299282!3d-17.82661946489983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93f1c37e6a735c45%3A0xb1d9b6947207475b!2sTorner%C3%ADa%20Vasquez!5e0!3m2!1ses!2sbo!4v1723127423539!5m2!1ses!2sbo"  ></iframe>
        `;
    }, 500);

});