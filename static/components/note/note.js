//help from MSI
(function(){

    var note = {
        props: ['note_title', 'note_id', 'note_content'],
        data: null,
        methods: {}
    };

    note.data = function() {
        var data = {
            title : this.note_title,
            content : this.note_content,
            id : this.note_id
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
