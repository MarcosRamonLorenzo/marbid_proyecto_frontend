import { Link } from "react-router-dom";

const Conditions = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
      <Link to="/" className="text-blue-500 underline mb-4 block">
        Volver al Home
      </Link>
      <div className="container mx-auto px-4 py-8">
        <header className="bg-gray-800 text-white py-4">
          <div className="container mx-auto">
            <h1 className="text-3xl">Política de Privacidad</h1>
          </div>
        </header>

        <section className="bg-white p-8 shadow my-4">
          <h2 className="text-2xl font-bold mb-4">Política de Privacidad</h2>
          <p>
            Tu privacidad es importante para nosotros. Esta política de privacidad explica qué datos personales recopilamos de nuestros usuarios y cómo los utilizamos.
          </p>
          <h3 className="text-xl font-semibold mt-4">Recopilación de Datos</h3>
          <p>
            Recopilamos información para proporcionar mejores servicios a todos nuestros usuarios. Recopilamos información de las siguientes maneras:
            <ul className="list-disc ml-6 mt-2">
              <li>Información que nos proporcionas directamente.</li>
              <li>Información que obtenemos cuando utilizas nuestros servicios.</li>
            </ul>
            Esta información puede incluir tu nombre, dirección de correo electrónico, número de teléfono, dirección física, entre otros.
          </p>
          <h3 className="text-xl font-semibold mt-4">Uso de la Información</h3>
          <p>
            Utilizamos la información que recopilamos para los siguientes propósitos:
            <ul className="list-disc ml-6 mt-2">
              <li>Proporcionar nuestros servicios.</li>
              <li>Mantener y mejorar nuestros servicios.</li>
              <li>Desarrollar nuevos servicios.</li>
              <li>Entender cómo nuestros usuarios utilizan nuestros servicios para mejorar la experiencia del usuario.</li>
              <li>Enviar comunicaciones relacionadas con nuestros servicios, promociones, y ofertas especiales.</li>
            </ul>
          </p>
          <h3 className="text-xl font-semibold mt-4">Seguridad de los Datos</h3>
          <p>
            Nos comprometemos a proteger tus datos personales. Implementamos medidas de seguridad adecuadas para prevenir el acceso no autorizado, la divulgación, la alteración o la destrucción de tus datos personales.
          </p>
          <h3 className="text-xl font-semibold mt-4">Compartir la Información</h3>
          <p>
            No compartimos tu información personal con empresas, organizaciones o individuos fuera de nuestra empresa, salvo en las siguientes circunstancias:
            <ul className="list-disc ml-6 mt-2">
              <li>Con tu consentimiento.</li>
              <li>Para procesamiento externo.</li>
              <li>Por motivos legales.</li>
            </ul>
          </p>
        </section>
      </div>
      <div className="container mx-auto px-4 py-8">
        <header className="bg-gray-800 text-white py-4">
          <div className="container mx-auto">
            <h1 className="text-3xl">Términos y Condiciones</h1>
          </div>
        </header>

        <section className="bg-white p-8 shadow my-4">
          <h2 className="text-2xl font-bold mb-4">Términos y Condiciones</h2>
          <p>
            Estos términos y condiciones describen las reglas y regulaciones para el uso de nuestro sitio web.
          </p>
          <h3 className="text-xl font-semibold mt-4">Introducción</h3>
          <p>
            Al acceder a este sitio web, asumimos que aceptas estos términos y condiciones en su totalidad. No continúes utilizando el sitio web si no aceptas todos los términos y condiciones establecidos en esta página.
          </p>
          <h3 className="text-xl font-semibold mt-4">Licencia</h3>
          <p>
            A menos que se indique lo contrario, nosotros y/o nuestros licenciantes poseemos los derechos de propiedad intelectual de todo el material en el sitio web. Todos los derechos de propiedad intelectual están reservados. Puedes ver y/o imprimir páginas del sitio web para tu uso personal sujeto a las restricciones establecidas en estos términos y condiciones.
          </p>
          <h3 className="text-xl font-semibold mt-4">Limitaciones</h3>
          <p>
            En ningún caso seremos responsables por daños indirectos, incidentales, especiales, consecuentes o punitivos, incluidos, sin limitación, pérdida de beneficios, datos, uso, fondo de comercio u otras pérdidas intangibles, resultantes de:
            <ul className="list-disc ml-6 mt-2">
              <li>Tu uso o acceso o la imposibilidad de uso o acceso al servicio.</li>
              <li>Cualquier conducta o contenido de cualquier tercero en el servicio.</li>
              <li>Cualquier contenido obtenido del servicio.</li>
              <li>Acceso no autorizado, uso o alteración de tus transmisiones o contenido.</li>
            </ul>
          </p>
          <h3 className="text-xl font-semibold mt-4">Modificaciones de los Términos</h3>
          <p>
            Nos reservamos el derecho, a nuestra sola discreción, de modificar o reemplazar estos términos en cualquier momento. Si una revisión es material, intentaremos proporcionar al menos 30 días de aviso antes de que los nuevos términos entren en vigor. Lo que constituye un cambio material será determinado a nuestra sola discreción.
          </p>
        </section>
      </div>
    </div>
    </>
  );
};

export default Conditions;
