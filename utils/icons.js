const iconsName = (routeName) => {
    const icons = {
    Inicio: 'home',
      Tareas: 'tasks',
      Meta: 'tachometer',
      Configuracion: 'gears',
    };
    return icons[routeName] || 'users';
  };
  
  export default iconsName;
  