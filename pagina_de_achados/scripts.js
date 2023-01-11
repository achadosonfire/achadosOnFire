const qs = el => document.querySelector(el)
const cl = el => console.log(el)
const produtos_containers = document.querySelectorAll('.produtos-container')
const produtos = document.querySelectorAll('.produto')
const search_input = qs('#search_input')
const msg_error = qs('.msg-error')

// FUNCTION ALTERAR TOPICOS

function alterar_topicos({target}){
    let topico = target.id
    if(topico){
        for (el of produtos_containers){
            el.classList.add('hide')
        }
        msg_error.classList.add('hide')
        switch (topico){
            case "casa-e-decoracao":
                for (el of produtos_containers){
                    if (el.classList.contains('produtos-casa-e-decoracao')){
                        el.classList.remove('hide')
                    }
                }
                break
            case "eletronicos":
                for (el of produtos_containers){
                    if (el.classList.contains('produtos-eletronicos')){
                        el.classList.remove('hide')
                    }
                }
                break
            case "moda-e-roupas":
                for (el of produtos_containers){
                    if (el.classList.contains('produtos-moda-e-roupas')){
                        el.classList.remove('hide')
                    }
                }
                break
            case "maes-e-bebes":
                for (el of produtos_containers){
                    if (el.classList.contains('produtos-maes-e-bebes')){
                        el.classList.remove('hide')
                    }
                }
                break
        }
        for (el of produtos){
            el.classList.remove('hide')
        }
    }
}

// FUNCTION MOSTRAR MAIS TOPICOS

const btn_roupas = qs('.moda-e-roupas')
const btn_maes = qs('.maes-e-bebes')
const seta = qs('.seta')
function mostrar_mais_topicos(element){
    if (btn_maes.classList.contains('hide')){
        element.children[0].innerHTML = 'Ver menos'
    } else{
        element.children[0].innerHTML = 'Ver mais'
    }
    btn_roupas.classList.toggle('hide')
    btn_maes.classList.toggle('hide')
    seta.classList.toggle('seta_cima')
}

// FUNCTION PROCURAR

function procurar(e){
    if (e.keyCode == 13){
        for (el of produtos){
            el.classList.add('hide')
        }
        for (el of produtos_containers){
            el.classList.add('hide')
        }
        msg_error.classList.remove('hide')
        let busca_do_usuario = search_input.value.toLowerCase()
        for (el of produtos){
            let item_desejado = el.children[1].innerText.toLowerCase()
            if (busca_do_usuario == item_desejado){
                cl('produto encontrado!')
                el.parentNode.parentNode.classList.remove('hide')
                el.classList.remove('hide')
                msg_error.classList.add('hide')
            }
        }
    }

    if (e.keyCode == 8){
        if (!msg_error.classList.contains('hide')){
            for (el of produtos_containers){
                if (el.classList.contains('produtos-casa-e-decoracao')){
                    el.classList.remove('hide')
                } else{
                    el.classList.add('hide')
                }
            }
        }
        for (el of produtos){
            el.classList.remove('hide')
            msg_error.classList.add('hide')
        }
        
    } 
}