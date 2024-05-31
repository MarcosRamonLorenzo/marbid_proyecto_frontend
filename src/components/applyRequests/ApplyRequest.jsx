import React from "react";
import UserAvatarView from "../user/UserAvatarView";
import { formatDate } from "@/functions/timeFunc";
import { Button, Card } from "@nextui-org/react";
import useService from "@/hooks/useService";

const ApplyRequest = ({ request }) => {
  const { handleAcceptServiceRequest } = useService();
  return (
    <Card
      className="sm:mx-5 my-10 p-4 w-full  md:w-[30em] border border-[#eee]"
      shadow="none"
      radius="sm"
    >
      <div className="flex items-center justify-around gap-3">
        <div>
          <UserAvatarView user={request?.user} />
          <p className="text-sm mt-1">{formatDate(request?.createdAt)}</p>
        </div>
        <Button
          color="success"
          radius="sm"
          onClick={() => {
            handleAcceptServiceRequest(request?.serviceId, request?.userId);
          }}
        >
          Aceptar
        </Button>
      </div>
    </Card>
  );
};

export default ApplyRequest;
