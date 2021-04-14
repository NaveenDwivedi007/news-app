import { NgModule } from '@angular/core';
import { MatButtonModule} from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';
import { MatMenuModule} from '@angular/material/menu';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule} from '@angular/material/list';

const material=[ MatButtonModule, 
  MatCardModule, 
  MatMenuModule,
   MatToolbarModule, 
   MatIconModule,
   MatSidenavModule, 
   MatListModule]
@NgModule({
  
  imports: [
    material 
  ],
  exports:[ material]
})
export class MaterialModule { }
