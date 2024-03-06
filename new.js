return new Promise((resolve, reject) => {
			var column = this._addColumn(definition, before, nextToColumn);
			
			this._reIndexColumns();
			
			this.dispatch("column-add", definition, before, nextToColumn);
			
			if(this.layoutMode() != "fitColumns"){
				column.reinitializeWidth();
			}
			
			this.redraw(true);
			
			this.table.rowManager.reinitialize();
			
			this.rerenderColumns();
			
			resolve(column);
		});
	}

if(!this.redrawBlock){
			this.renderer.rerenderColumns(update, silent);
		}else{
			if(update === false || (update === true && this.redrawBlockUpdate === null)){
				this.redrawBlockUpdate = update;
			}
		}
	}//yea
if(force){
			this.table.rowManager.resetScroll();
			this.table.rowManager.reinitialize();
		}
