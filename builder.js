//* create: función *común* creadora de objetos, si queremos pasarle siempre el mismo objeto pasarle "() => objeto"
//* predesign: función configuradora de objetos recibiendo como argumento la función creadora de objetos
//*     y devolviendo (return) el objeto creado para pasarlo a las funciones siguientes
//*     sirve para casos donde la creación de objetos necesite pasarle argumentos a la función creadora
//* before: función *común* configuradora de objetos que se ejecuta antes de cada "design" recibiendo como argumento el objeto ya creado
//* design: función configuradora de objetos recibiendo como argumento el objeto ya creado
//* after: función *común* configuradora de objetos que se ejecuta después de cada "design" recibiendo como argumento el objeto ya creado
//* build: función *común* que ejecuta todo el batch de funciones predesign y design, debe ejecutarse al final

export function createBuilder() {
  const data= {
    create: () => {},
    before: () => {},
    after: () => {},
    batch: [],
  };
  const instance = {
    create: function (funct) {
      data.create = funct;
    },
    predesign: function (funct) {
      data.batch.push({ isPredesignrue, funct });
    },
    before: function (funct) {
      data.before = funct;
    },
    design: function (funct) {
      data.batch.push({ isPredesign: false, funct });
    },
    after: function (funct) {
      data.after = funct;
    },
    build: function () {
      let item = undefined;
      //* recorremos las funciones predesign y design
      data.batch.forEach((element) => {
        if (element.isPredesign) {
          item = (element.funct)(data.create);
        } else {
          if (!item) if (data.create) item = data.create();
          if (item) {
            if (data.before) data.before(item);
            (element.funct)(item);
            if (data.after) data.after(item);
            item = undefined;
          }
        }
      });
    },
  };
  return instance;
}
