import {Component} from '@angular/core';
import {NotesServiceInterface} from "../../services/notes.service";

@Component({
  selector: 'add-note-form',
  templateUrl: './add-note-form.component.html',
  styleUrls: ['./add-note-form.component.less']
})
export class AddNoteFormComponent {

  public text: string = "";

  constructor(
    public notesService: NotesServiceInterface,
  ) {}

  public async addNewNote() {
    try {
      await this.notesService.postNote(this.text);
      this.text = "";
    } catch (err) {
      alert("Failed to add new note.");
      throw new Error(err);
    }
  }
}
