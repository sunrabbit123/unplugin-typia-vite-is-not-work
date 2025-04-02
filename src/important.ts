import { ILlmSchema, OpenApiV3, OpenApiV3_1 } from "@samchon/openapi";
import typia from "typia";


// 
export function assertHttpLlmApplication<
  T extends ILlmSchema.Model
>(_props: {
  document: OpenApiV3.IDocument
}){
  return typia.createAssert<OpenApiV3_1.IDocument>();
}
