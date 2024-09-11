import { getOneProject } from "@/lib/project";
import { notFound } from "next/navigation";
import React from "react";
import FeedbackPublicSideNav from "../(common)/FeedbackPublicSideNav";
import FeedbackPublicContentContainer from "./components/FeedbackPublicContentContainer";
import FeedbackHeader from "../(common)/FeedbackHeader";
import { IFeedbackBoard } from "@/interfaces";

type PagePropsType = {
  params: {
    projectName: string;
  };
};

const Page: React.FC<PagePropsType> = async ({ params }) => {
  let { projectName } = params;
  projectName = projectName.toLowerCase();

  let project;
  try {
    project = await getOneProject({ name: projectName });
  } catch (error: any) {
    console.log("Failed to get project details", error);
  }

  if (!project) {
    return notFound();
  }

  const feedbackBoards = project?.feedbackBoards as unknown as IFeedbackBoard[];

  return (
    <main className="flex flex-col">
      <FeedbackHeader title="Feedbacks" />
      <div className="flex flex-1">
        <div className="min-w-0 flex-1 border-t border-gray-200 xl:flex">
          <FeedbackPublicSideNav feedbackBoards={feedbackBoards} />

          <FeedbackPublicContentContainer feedbackBoards={feedbackBoards} />
        </div>
      </div>
    </main>
  );
};

export default Page;
