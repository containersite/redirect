//<![CDATA[
var limitBookmark = 100;
var bookmark = (function(){
    list = [];

    function Item(id,name,status,type,link,img){
        this.id = id;
        this.name = name;
        this.status = status;
        this.type = type;
        this.link = link;
        this.img = img;
    }

    function setBookmark(){
        localStorage.setItem('bookmark', JSON.stringify(list));
    }

    obj = {};

    obj.addItemTobookmark = function(id,name,status,type,link,img){
        var item = new Item(id,name,status,type,link,img);
        var itemList = list;
        if(itemList != null){
            var same = itemList.find(item => item.id == id);
            if(list.length < limitBookmark){
                if(!same){
                    list.push(item);
                    setBookmark();
                }
            }
        }else{
            list.push(item);
            setBookmark();
        }
    }

    return obj;
})();

$('.bookmark').each(function(){
    $(this).click(function(){
        // লিঙ্ক সেট করা
        var link = 'https://zmistar.blogspot.com/';

        // নতুন ট্যাবে খোলা
        window.open(link, '_blank');

        // লোকালস্টোরেজে সংরক্ষণ (ঐচ্ছিক)
        var id = $(this).data('id') || 'parves_9';
        bookmark.addItemTobookmark(id, $('title').text(), '', '', link, '');
    });
});
//]]>
