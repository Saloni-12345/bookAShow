let languages = ["Hindi","English","Telugu","Tamil"];
let format = ["2D","3D","4DX"];
let generation = ["Action","Adventure","Biography","Comedy"];
let cities = ["NCR","Ahmedabad","Banglore","Chennai","Mumbai","Hyderabad"];
let date = new Date();
let today = date.getDate();
let month = date.toLocaleDateString("default",{month:"short"});
let moviesData = [
    {    
        id : 25,
        title:"Kisi Ka Bhai Kisi Ki Jaan",
        url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ni43LzEwICA2NC4zSyB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00339118-gvcavdpszx-portrait.jpg",  
        typeOf : ["Action","Comedy","Drama"],
        languages:["Hindi"],
        creater:"UA",
        rating:"6.7/10",
        votes:"64.3K",
        cities:["Mumbai","NCR","Ahmedabad","Banglore","Chennai","Hyderabad"],
        format:["2D"]
    },
    {    
        id : 24,
        title:"Fast X",
        url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MjUxSyBsaWtlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00122562-zsaqxdtsqe-portrait.jpg",
        typeOf : ["Action","Adventure","Crime","Thriller"],
        languages:["English","Hindi","Tamil","Telugu"],
        creater:"UA",
        rating:"6.7/10",
        votes:"64.3K",
        cities:["Mumbai","NCR","Ahmedabad","Banglore","Chennai","Hyderabad"],
        format:["2D","3D","IMAX 3D","4DX","4DX 3D"]
    },
    {    
        id : 23,
        title:"Ponniyin Selvan - Part 2",
        url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC44LzEwICAyMC4ySyB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00348725-ftkedqllrt-portrait.jpg",
        typeOf : ["Action","Adventure","Drama","Historical"],
        languages:["Hindi","Tamil","Telugu","Kannada","Malayalam"],
        creater:"U",
        rating:"6.7/10",
        votes:"64.3K",
        cities:["Mumbai","NCR","Ahmedabad","Banglore","Chennai","Hyderabad"],
        format:["2D","4DX"]
    },
    {    
        id : 22,
        title:"Agent",
        url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ni8xMCAgMTEuNUsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00310078-fkyazsqyfj-portrait.jpg",
        typeOf : ["Action","Thriller"],
        languages:["Malayalam","Telugu"],
        creater:"UA",
        rating:"6.7/10",
        votes:"64.3K",
        cities:["Mumbai","NCR","Ahmedabad","Banglore","Chennai","Hyderabad"],
        format:["2D"]
    },
    {    
        id : 21,
        title:"Virupaksha",
        url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS40LzEwICA1Mi4zSyB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00346626-vnzlbbnyzy-portrait.jpg",
        typeOf : ["Action","Mystery","Thriller"],
        languages:["Hindi","Tamil","Telugu","Kannada","Malayalam"],
        creater:"A",
        rating:"6.7/10",
        votes:"64.3K",
        cities:["Mumbai","NCR","Ahmedabad","Banglore","Chennai","Hyderabad"],
        format:["2D"]
    },
    {    
       id : 20,
       title:"Sisu",
       url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC4xLzEwICA3Mzcgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00357229-zrnawyaqvt-portrait.jpg",
       typeOf : ["Action","War"],
       languages:["English","Hindi"],
       creater:"A",
       rating:"6.7/10",
       votes:"64.3K",  
       cities:["Mumbai","NCR","Ahmedabad","Banglore","Chennai","Hyderabad"],
       format:["2D"]
    },
    {    
         id : 19,
         title:"The Super Mario Bros. Movie",
         url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS4xLzEwICA2LjdLIHZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00343051-yuqjyzxvvj-portrait.jpg",
         typeOf : ["Adventure","Animation"],
         languages:["English","Hindi"],
         creater:"U",
         rating:"6.7/10",
         votes:"64.3K",
         cities:["Mumbai","NCR","Ahmedabad","Banglore","Chennai","Hyderabad"],
         format:["2D","ICE 3D","3D"]
    },
    {    
        id : 18,
        title:"Rudhran",
        url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ny4yLzEwICA1LjNLIHZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00333202-zsnfnlghtq-portrait.jpg",
        typeOf : ["Action","Drama"],
        languages:["Tamil"],
        creater:"U",
        rating:"6.7/10",
        votes:"64.3K",
        cities:["Chennai",],
        format:["2D"]
    },
    {    
       id : 17,
       title:"Viduthalai Part - 1",
       url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS4zLzEwICAyOS41SyB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00310832-mxsdusckzk-portrait.jpg",
       typeOf : ["Action","Crime","Drama"],
       languages:["Tamil"],
       creater:"A",
       rating:"6.7/10",
       votes:"64.3K",
       cities:["Banglore","Chennai"],
       format:["2D"]
    },
    {    
        id : 16,
        title:"Evil Dead Rise",
        url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ny42LzEwICAxNi4xSyB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00349309-ynqvrxxagk-portrait.jpg",
        typeOf : ["Horror"],
        languages:["English"],
        creater:"A",
        rating:"6.7/10",
        votes:"64.3K",
        cities:["Mumbai","NCR","Ahmedabad","Banglore","Chennai","Hyderabad"],
        format:["2D","4DX","MX4D"]
    },
    {
        id: 15,
        title:"Mrs. Chatterjee Vs Norway",
        url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC43LzEwICAxNi43SyB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00319185-nvrfwjnfvv-portrait.jpg",
        typeOf: ["Biography","Drama"],
        languages:["Hindi"],
        creater:"U",
        rating:"6.7/10",
        votes:"64.3K",
        cities:["Mumbai","NCR","Ahmedabad","Banglore"],
        format:["2D"]
    },
    {
        id: 14,
        title:"Bera Ek Aghori",
        url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ny43LzEwICBOZXcgUmVsZWFzZQ%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00358042-qlcmceprfw-portrait.jpg",
        typeOf: ["Horror","Thriller"],
        languages:["Hindi"],
        creater:"A",
        rating:"6.7/10",
        votes:"64.3K",
        cities:["Mumbai","Hyderabad"],
        format:["2D"]
    },
    {
        id: 13,
        title:"Everything Everywhere All at Once",
        url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC43LzEwICA3LjdLIHZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00337077-hpdszpszml-portrait.jpg",
        typeOf: ["Action","Adventure","Sci-Fi"],
        languages:["English"],
        creater:"A",
        rating:"8.7/10",
        votes:"78.3K",
        cities:["Mumbai","Banglore"],
        format:["2D"]
    }, 
    {
        id: 12,
        title:"Ant-Man and the Wasp: Quantumania",
        url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC8xMCAgMzYuOUsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00302402-gwqypmksaq-portrait.jpg",
        typeOf: ["Action","Adventure","Comedy","Sci-Fi"],
        languages:["English","Hindi","Tamil","Telugu"],
        creater:"UA",
        rating:"7.2/10",
        votes:"68.63K",
        cities:["Mumbai","NCR"],
        format:["2D","3D","4DX","MX4D 3D","4DX 3D"]
    },
    {
        id: 11,
        title:"Chengiz",
        url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS4xLzEwICAxM0sgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00345849-pelkursyjj-portrait.jpg",
        typeOf: ["Action","Crime","Period","Thriller"],
        languages:["Bengali","Hindi"],
        creater:"UA",
        rating:"7/10",
        votes:"56.9K",
        cities:["Mumbai","NCR","Ahmedabad"],
        format:["2D"]
    },
    {
        id: 10,
        title:"John Wick: Chapter 4",
        url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS8xMCAgNTcuN0sgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00311714-erxuyflesv-portrait.jpg",
        typeOf: ["Action","Thriller"],
        languages:["English","Hindi","Tamil","Telugu"],
        creater:"U",
        rating:"8.1/10",
        votes:"59K",
        cities:["Mumbai","NCR","Ahmedabad","Banglore","Hyderabad"],
        format:["2D","MX4D","4DX"]
    },
    {
        id: 9,
        title:"Dilwale Dulhania Le Jayenge",
        url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS4yLzEwICAyNC42SyB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00000652-tdprjssvgn-portrait.jpg",
        typeOf: ["Classic","Drama","Romantic"],
        languages:["Hindi"],
        creater:"U",
        rating:"7.7/10",
        votes:"74.3K",
        cities:["Mumbai"],
        format:["2D"]
    },
    {
        id: 8,
        title:"Polite Society",
        url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ni42LzEwICBOZXcgUmVsZWFzZQ%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00355447-pdaktkuxke-portrait.jpg",
        typeOf: ["Adventure","Comedy"],
        languages:["English"],
        creater:"A",
        rating:"6.9/10",
        votes:"56.3K",
        cities:["Mumbai","NCR","Ahmedabad","Banglore","Chennai","Hyderabad"],
        format:["2D"]
    },
    {
        id: 7,
        title:"The Pope's Exorcist",
        url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ny4yLzEwICAxMC40SyB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00353346-twzksncnqj-portrait.jpg",
        typeOf: ["Horror","Thriller"],
        languages:["English","Hindi","Tamil","Telugu"],
        creater:"A", 
        rating:"5.8/10",
        votes:"60.9K",
        cities:["Mumbai","NCR","Ahmedabad","Banglore","Chennai"],
        format:["2D","MX4D"]
    },
    {
        id: 6,
        title:"Avatar: The Way of Water",
        url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC43LzEwICAyMjUuM0sgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00037264-bdbylvqqwb-portrait.jpg",
        typeOf: ["Action","Adventure","Fantasy"],
        languages:["English","Kannada","Hindi","Tamil","Telugu","Malayalam"],
        creater:"UA",
        rating:"8.9/10",
        votes:"98.8K",
        cities:["NCR","Ahmedabad","Banglore"],
        format:["2D","3D","4DX"]
    },
    {
        id: 5,
        title:"Amar Akbar Anthony (1977)",
        url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC4xLzEwICAzMzUgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00058522-vrnetngynq-portrait.jpg",
        typeOf: ["Classic","Comedy","Musical"],
        languages:["Hindi"],
        creater:"U",
        rating:"7.8/10",
        votes:"85.2K",
        cities:["Mumbai","NCR","Ahmedabad","Banglore","Chennai","Hyderabad"],
        format:["2D"]
    },
    {
        id: 4,
        title:"Bhola",
        url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ny42LzEwICA0OS4ySyB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00326977-scnvhurlwr-portrait.jpg",
        typeOf: ["Action","Drama","Thriller"],
        languages:["Hindi"],
        creater:"UA",
        rating:"6.4/10",
        votes:"66.3K",
        cities:["Mumbai","NCR","Ahmedabad","Banglore"],
        format:["2D","3D","4DX"]
    },
    {
        id: 3,
        title:"Bad Boy (Hindi)",
        url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC40LzEwICAyMi44SyB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00103092-tklyclcfud-portrait.jpg",
        typeOf: ["Drama","Romantic"],
        languages:["Hindi"],
        creater:"UA",
        rating:"6/10",
        votes:"60.3K",
        cities:["Mumbai","NCR","Ahmedabad","Banglore","Hyderabad"],
        format:["2D"]
    },
    {
        id: 2,
        title:"Suzume",
        url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS41LzEwICAxMS4xSyB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00352085-aghrdlnkqp-portrait.jpg",
        typeOf: ["Action","Adventure","Anime"],
        languages:["Hindi","Japanese"],
        creater:"UA",
        rating:"6.7/10",
        votes:"56.9K",
        cities:["Mumbai","NCR","Ahmedabad","Chennai"],
        format:["2D","4DX"]
    },
    {
        id: 1,
        title:"Guardians of the Galaxy Vol. 3",
        url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS4zLzEwICAzNS4zSyB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00310794-nmwukaluxy-portrait.jpg",
        typeOf: ["Action","Adventure","Comedy"],
        languages:["English","Hindi","Tamil","Telugu"],
        creater:"UA", 
        rating:"7.7/10",
        votes:"74.3K",
        cities:["Mumbai","NCR","Ahmedabad","Banglore","Hyderabad"],
        format:["2D","3D","4DX"]
    }, 
];
let loginData = [
{
  id : 101,
  username : "Saloni",
  email : "saloni@123.com",
  firstName : "Saloni",
  lastName : "Sharma",
  marriedStatus : "No",
  mobileNo : 8423370180,
},
{
  id : 102,
  username : "Test",
  email : "test@test.com",
  firstName : "Jane",
  lastName : "Doe",
  marriedStatus : "Yes",
  mobileNo : 9811576789,
},
]
let bookingArr = [
  {
    bookingId: 1,
    userId : 101,
    amount: 1090,
    date: "12 May",
    movieHall: "Chinepolis: DLF Place, Saket",
    tickets: ['A 13', 'B 13', 'H 12'],
    time: "12:00 PM",
    title: "Kisi Ka Bhai Kisi Ki Jaan",
  },
  {
    bookingId: 2,
    userId: 102,
    amount:1260,
    date:"10 May",
    movieHall:"Chinepolis: DLF Place, Saket",
    tickets: ['A 4', 'A 11', 'B 14'],
    time: "09:00 AM",
    title:"Ponniyin Selvan - Part 2"
  }
]
module.exports = { moviesData,loginData,bookingArr };