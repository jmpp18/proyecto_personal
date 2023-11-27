function ayuda(){
   

    Swal.fire({
        title: "nesecitas ayuda? comunicate con nosotros",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "facebook",
        denyButtonText: `gmail`
      }).then((result) => {
        if (result.isConfirmed) {
          window.open("https://web.facebook.com/?locale=es_LA")
        } else if (result.isDenied) {
          Swal.fire("usa el siguiente correo", "jmperezp@gmail.com" );
        }
      });



}