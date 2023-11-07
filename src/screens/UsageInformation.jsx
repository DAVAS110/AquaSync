const UsageInformation = () => {
  return (
    <div className="flex justify-center m-14 mb-0">
      <article className="h-full flex flex-col justify-center">
        <section className="flex flex-col gap-[32px]">
          <h1 className="text-black text-[2em] font-abc font-semibold">
            Funcionamiento de Aqua Sync
          </h1>
          <p className="text-justify w-[90%] text-[.9em]">
            El modelo de AquaSync consta la división del servicio de agua
            potable, que es brindado por el AyA, respecto al agua que es
            recolectada mediante la lluvia con la implementación de un tanque,
            esto para automatizar su utilización en servicios de la vida
            cotidiana que no requieran el uso de aguas limpias, tales como el
            riego y el agua que es destinada a los servicios sanitarios, sin el
            riesgo de que se combinen las aguas sucias con el agua potable para
            el consumo cotidiano. Esto es posible gracias a la implementación de
            un sistema válvulas solenoides que garantiza la seguridad en el
            hogar.
          </p>
          <p className="text-justify w-[90%] text-[.9em]">
            AquaSync también cuenta con un sensor de PH colocado en el apartado
            de agua potable, esto para priorizar la seguridad de los usuarios
            brindándoles la posibilidad de monitorear y ser alertados en caso de
            que en el servicio de agua potable sea detectada agua contaminada.
          </p>
          <p className="text-justify w-[90%] text-[.9em]">
            AquaSync posee 3 válvulas, 1 sensor de PH, 1 sensor de turbidez y 1
            sensor de nivel de agua, este último asegurando que el tanque una
            vez llegado a su límite se cierre automáticamente, para que a su vez
            en caso de que se acabe el agua que es destinada desde la
            recolección de lluvia para los servicios que pueden ser
            suplementados sin agua potable, se empiece a llenar el tanque con
            agua potable para evitar que se dependa completamente del agua de
            lluvia.
          </p>
        </section>
      </article>
    </div>
  );
};

export default UsageInformation;
