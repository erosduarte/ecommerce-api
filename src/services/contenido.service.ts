import { FooterContenido, HomeContenido, SeccionMenu } from '../contenido.model';
import { Footer, Home, Menu } from '../contenido';

class ContenidoService {
  public getHome(): HomeContenido {
    return Home;
  }

  public getMenu(): SeccionMenu[] {
    return Menu;
  }

  public getFooter(): FooterContenido {
    return Footer;
  }
}

export const contenidoService = new ContenidoService();