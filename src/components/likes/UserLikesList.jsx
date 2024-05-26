import React, { useEffect } from "react";
import ServiceCard from "../services/ServiceCard";
import useLike from "@/hooks/useLike";
import useAuth from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useService from "@/hooks/useService";

const UserLikesList = () => {
  const { userLikes, fetchUserLikes } = useLike();
  const { navigateService } = useService();
  const navigate = useNavigate();

  const { currentUser } = useAuth();

  useEffect(() => {
    if (currentUser.uid) {
      fetchUserLikes(currentUser.uid);
    }
  }, []);

  return (
    <div className="gap-x-5 gap-y-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-5">
      {userLikes && userLikes.length ? (
        userLikes.map(
          (item, index) =>
            item.service && (
              <ServiceCard
                item={item.service}
                key={index}
                onClick={() => {
                  navigateService(item?.service?.id);
                }}
              />
            )
        )
      ) : (
        <h1>No hay servicios gustados</h1>
      )}
    </div>
  );
};

export default UserLikesList;
