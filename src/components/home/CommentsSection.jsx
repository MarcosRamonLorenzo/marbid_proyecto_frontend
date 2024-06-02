import { Avatar, Card, CardBody } from "@nextui-org/react";
import React from "react";

const SeccionComentarios = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 flex items-center justify-center ">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Lo Que Dicen Nuestros Freelancers
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Escucha a algunos de los talentosos freelancers que han encontrado
              éxito en nuestra plataforma.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <div className="grid gap-4">
            <Card className="dark:border ">
              <CardBody className="p-6">
                <div className="flex flex-col items-start space-y-4">
                  <div className="flex items-center gap-4">
                    <Avatar src="data:image/jpeg;base64,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" />
                    <div>
                      <p className="text-sm font-medium leading-none">
                        Sofía García
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Diseñadora Web
                      </p>
                    </div>
                  </div>
                  <blockquote className="text-lg font-semibold leading-snug lg:text-xl lg:leading-normal">
                    &ldquo;Encontrar trabajo freelance en esta plataforma ha
                    sido un cambio radical para mí. El proceso es muy eficiente
                    y los clientes son increíbles para trabajar.&rdquo;
                  </blockquote>
                </div>
              </CardBody>
            </Card>
          </div>
          <div className="grid gap-4">
            <Card className="dark:border">
              <CardBody className="p-6">
                <div className="flex flex-col items-start space-y-4">
                  <div className="flex items-center gap-4">
                    <Avatar src="https://estaticos-cdn.prensaiberica.es/clip/eba5cefd-11bf-4224-96ef-24f85de98d1b_16-9-discover-aspect-ratio_default_0.jpg" />
                    <div>
                      <p className="text-sm font-medium leading-none">
                        Javier López
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Redactor de Contenidos
                      </p>
                    </div>
                  </div>
                  <blockquote className="text-lg font-semibold leading-snug lg:text-xl lg:leading-normal">
                    &ldquo;He podido construir una corriente constante de
                    clientes y crecer&rdquo;
                  </blockquote>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeccionComentarios;
