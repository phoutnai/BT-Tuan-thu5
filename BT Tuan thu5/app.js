var man=[
    {
    id:1,
    name:"Quần kaki",
    code:"TC143NA",
    price:"250.000",
    image:"https://fashionminhthu.com.vn/wp-content/uploads/2021/03/Cach-chon-quan-Kaki-nam-1.jpg"

    },
    {
    id:2,
    name:"Áo sơ mi nam",
    code:"TC1342NA",
    price:"380.000",
    image:"https://cdn0918.cdn4s1.com/media/js0105/js0105/3.jpg"
    },
    {
    id:3,
    name:"Áo thun nam",
    code:"TC323",
    price:"270.000",
    image:"https://bizweb.dktcdn.net/thumb/1024x1024/100/399/392/products/ao-thun-nam-co-tron-tay-ngan-hi-basic-fit-ao-phong-nam-khong-co-nhieu-ma-u-hiddle-3.jpg"

    },
    {
    id:4,
    name:"Bộ đồ thể thao",
    code:"TC223",
    price:"300.000",
    image:"https://vn-live-01.slatic.net/p/f624b3aac99e87c462c7b380ffd01e0f.jpg"

    }

]
var women=[
    {
    id:1,
    name:"váy ",
    code:"TC143",
    price:"250.000",
    image:"https://pos.nvncdn.com/312d68-57499/art/artCT/20210120_dy4cQVwT8PDqBQsfEhSyShCt.jpg"

    },
    {
    id:2,
    name:"Áo sơ mi nữ",
    code:"TC123",
    price:"200.000",
    image:"https://bizweb.dktcdn.net/100/409/545/files/z3736331503812-31ba09fca0f8be3a506c141cebf9e6a0.jpg?v=1663660851361"
    },
    {
    id:3,
    name:"Áo Khoác",
    code:"TC323",
    price:"270.000",
    image:"https://zizoou.com/cdn/shop/products/Ao-khoac-jacket-form-rong-oversize-7-6-Ao-khoac-trang-be-ZiZoou-Store_de69df3e-1358-47b4-a3cf-6ed5a99b7782.jpg?v=1677890431"

    },
    {
    id:4,
    name:"Áo thun",
    code:"TC223",
    price:"300.000",
    image:"https://bizweb.dktcdn.net/100/369/522/files/ao-thun-basic-nu-local-brand-logo-tee-dkmv-2.jpg?v=1655262960483"

    }
]
function listProducts(){
    for(let i=0; i<= man.length-1;i++){
        var demo = '<div class="col-3">';
        demo+= '<div class="card" style="width: 18rem; ">';
        demo+= '<img src="'+man[i].image+'" class="card-img-top" style="height:400px; ">';
        demo += '<div class="card-body">';
        demo += '<h5 class="card-title">'+man[i].name+'</h5>';
        demo += '<p class="card-text">'+man[i].price+'</p>';
        demo += '<a href="#" class="btn btn-primary" onclick="oder()">Đặt mua</a>';
        demo += '</div>';
        demo += '</div>';
        demo += '</div>';
        console.log(demo);
        document.getElementById("men").innerHTML+= demo;


    }
    for(let i=0; i<= women.length-1;i++){
        var demo = '<div class="col-3">';
        demo+= '<div class="card" style="width: 18rem; ">';
        demo+= '<img src="'+women[i].image+'" class="card-img-top" style="height:400px; ">';
        demo += '<div class="card-body">';
        demo += '<div class="card-title">'+women[i].name + '</h5>';
        demo += '<p class="card-text">'+women[i].price+'</p>';
        demo += '<a href="#" class="btn btn-primary" onclick="oder()">Đặt mua</a>';
        demo += '</div>';
        demo += '</div>';
        demo += '</div>';
        console.log(demo);
        document.getElementById("women").innerHTML+= demo;


    }
    
    
    }