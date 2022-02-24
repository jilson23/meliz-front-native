const iconsName = (routeName) => {
    const icons = {
      Inicio: 'home',
      Actividades: 'tasks',
      Meta: 'tachometer',
      Configuracion: 'gears',
    };
    return icons[routeName] || 'users';
  };
  
  export default iconsName;
  