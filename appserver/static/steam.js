require([
         "splunkjs/mvc",
         "splunkjs/mvc/tableview"
        ],
          function(
                   mvc,
                   TableView
                  ) {        
                     var AvatarRenderer = TableView.BaseCellRenderer.extend({
                                                                             canRender: function(cell) { return (cell.field === 'Avatar'); },
                                                                             render: function($td, cell) { if (cell.field === 'Avatar') {
                                                                                                               var URL = cell.value;
                                                                                                               $td.html('<img src="' + URL + '"></a>'); } } });
                     mvc.Components.get('avatar1').getVisualization(function(tableView){
                                                                                        tableView.table.addCellRenderer(new AvatarRenderer());
                                                                                        tableView.table.render(); });
                     mvc.Components.get('avatar2').getVisualization(function(tableView){
                                                                                        tableView.table.addCellRenderer(new AvatarRenderer());
                                                                                        tableView.table.render(); });
                     mvc.Components.get('avatar3').getVisualization(function(tableView){
                                                                                        tableView.table.addCellRenderer(new AvatarRenderer());
                                                                                        tableView.table.render(); });
                     mvc.Components.get('avatar4').getVisualization(function(tableView){
                                                                                        tableView.table.addCellRenderer(new AvatarRenderer());
                                                                                        tableView.table.render(); });
                     mvc.Components.get('avatar5').getVisualization(function(tableView){
                                                                                        tableView.table.addCellRenderer(new AvatarRenderer());
                                                                                        tableView.table.render(); });
                     mvc.Components.get('avatar6').getVisualization(function(tableView){
                                                                                        tableView.table.addCellRenderer(new AvatarRenderer());
                                                                                        tableView.table.render(); });
                     mvc.Components.get('avatar7').getVisualization(function(tableView){
                                                                                        tableView.table.addCellRenderer(new AvatarRenderer());
                                                                                        tableView.table.render(); });
                    }
 );
