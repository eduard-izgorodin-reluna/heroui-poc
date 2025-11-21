"use client";

import * as React from "react";
import { BuilderComponent, useIsPreviewing } from "@builder.io/react";
import { builder } from "@builder.io/sdk";
import DefaultErrorPage from "next/error";
import "./builder-registry";

/* eslint-disable @typescript-eslint/no-explicit-any */

// Initialize Builder.io with your API key
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

interface BuilderPageProps {
  params: {
    page: string[];
  };
}

// Dynamic route configuration for static export
export const dynamicParams = true;

export default function Page(props: BuilderPageProps) {
  const isPreviewing = useIsPreviewing();
  const [builderContent, setBuilderContent] = React.useState<any>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchContent = async () => {
      const urlPath = "/" + (props.params?.page?.join("/") || "");
      
      try {
        const content = await builder
          .get("page", {
            userAttributes: {
              urlPath,
            },
          })
          .promise();

        setBuilderContent(content);
      } catch (error) {
        console.error("Error fetching Builder content:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, [props.params?.page]);

  // If Builder content exists or we're in preview mode, render it
  if (builderContent || isPreviewing) {
    return (
      <BuilderComponent
        model="page"
        content={builderContent}
      />
    );
  }

  // Show loading state
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          <p className="mt-4 text-foreground/60">Loading...</p>
        </div>
      </div>
    );
  }

  // Show 404 if no content found
  return <DefaultErrorPage statusCode={404} />;
}
