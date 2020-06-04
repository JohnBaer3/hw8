//help from MSI
(function(){

    var note = {
        props: ['note_title', 'note_content', 'note_id'],
        data: null,
        methods: {}
    };

    note.data = function() {
        var data = {
            title : this.title,
            content : this.content,
            id : this.id
        };
        note.methods.load.call(data);
        return data;
    };
    note.methods.load = function(){

    };

    utils.register_vue_component('note', 'components/note/note.html',
        function(template) {
            note.template = template.data;
            return note;
        });

})();
