import { Menu } from './menu.model';

// Menu model: Menu(id, title, routerLink, href, icon, target, hasSubMenu, parentId)
export const verticalMenuItems = [ 
    new Menu (1, 'Dashboard', '/', null, 'dashboard', null, false, 0),
    new Menu (2, 'Users', '/users', null, 'supervisor_account', null, false, 0), 
    new Menu (3, 'Upload Orders', '/form-controls/form-field', null, 'note_add', null, false, 0),
    new Menu (4, 'Existent Orders', '/tables/filtering', null, 'inbox', null, false, 0),
]

export const horizontalMenuItems = [
    new Menu (1, 'Dashboard', '/', null, 'dashboard', null, false, 0),
    new Menu (2, 'Users', '/users', null, 'supervisor_account', null, false, 0), 
    new Menu (3, 'Upload Orders', '/form-controls/form-field', null, 'note_add', null, false, 0),
    new Menu (4, 'Existent Orders', '/tables/filtering', null, 'inbox', null, false, 0),
]