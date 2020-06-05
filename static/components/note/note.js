//help from MSI
(function(){

    var note = {
        props: ['note_title', 'note_id', 'note_content', 'note_color'],
        data: null,
        methods: {}
    };

    note.data = function() {
        var data = {
            title : this.note_title,
            content : this.note_content,
            id : this.note_id,
            color: this.note_color,
            edit_mode: false
        };
        note.methods.load.call(data);
        return data;
    };


    note.methods.edit_note = function(){
        let self = this
        self.edit_mode = true
    }


    note.methods.load = function(){

    };

    utils.register_vue_component('note', 'components/note/note.html',
        function(template) {
            note.template = template.data;
            return note;
        });

})();
