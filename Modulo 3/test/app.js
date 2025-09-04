$(document).ready(function(){
    $('#miFormulario').on('submit', function(e){
        e.preventDefault();

        const nombre = $("#nombre").val()
        const email = $("#email").val()
        const telefono = $("#telefono").val()

        const datos = { nombre, email, telefono}

        localStorage.setItem('formularioDatos', JSON.stringify(datos))
    })

    //document.getElementById("btnInfo").AddListener('click',function......)
    $("#btnInfo").on('click', function(){
        const infoLocal = localStorage.getItem('formularioDatos')

        if(infoLocal != undefined && infoLocal != null)
        $("#infoLocalStorage").text(infoLocal)
        else $("#infoLocalStorage").text("No hay información")
    })

    function actualizarProgreso(){
        $('#barraProgreso').removeClass('bg-danger bg-warning bg-success ')

        let camposLlenados = 0;

        $('input').each(
            function(){
                if($(this).val().trim() != '')
                {
                    camposLlenados++;
                }
            }
        )

        const totalCampos = $('input').length
        const porcentaje = Math.round((camposLlenados/ totalCampos) * 100)

        $('#barraProgreso')
        .css('width', porcentaje + '%')
        .text(porcentaje + '%')

        if(porcentaje <= 33)
        {
            $('#barraProgreso').addClass('bg-danger')
        }
        else if(porcentaje <= 67){
            $('#barraProgreso').addClass('bg-warning')
        }
        else $('#barraProgreso').addClass('bg-success')

    }

    $('input').on('input', actualizarProgreso)
   // actualizarProgreso();
})