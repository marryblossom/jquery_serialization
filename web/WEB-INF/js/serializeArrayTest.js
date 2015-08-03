$(function(){
        $("#g").on('click',function(event) {

            console.log("---------------------jquery 对象----------------------------------------");
            console.log(($.param($("input"))));
            console.log("                                 ");
            console.log("                                 ");

            console.log("-------------------------------------------------------------");
            console.log("-------------------------------------------------------------");
            console.log("-------------------------------------------------------------");
            console.log("---------------------serialize结果----------------------------------------");
            console.log( $("form").serialize() );
            console.log("                                 ");

            console.log("---------------------serializeArray结果----------------------------------------");
            console.log( $("form").serializeArray() );
            console.log( "$(\"form\").serializeArray()[0].name==="+$("form").serializeArray()[0].name);
            console.log("                                 ");
            console.log("                                 ");
            console.log("                                 ");



            console.log("-------------------------直接序列化，utf-8编码格式------------------------------------");
            console.log($.param({ a: [ 2, 3, 4 ] }));
            console.log("-------------------------encodeURI编码格式------------------------------------");
            console.log(encodeURI($.param({ a: [ 2, 3, 4 ] })));
            console.log("-------------------------decodeURIComponent编码格式------------------------------------");
            console.log(decodeURIComponent($.param({ a: [ 2, 3, 4 ] })));
            event.preventDefault();
        });

    }

);
