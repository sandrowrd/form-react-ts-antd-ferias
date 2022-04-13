import { WfUserData } from "@seniorsistemas/workflow-cockpit";

export class WfUser implements WfUserData {
  id = "";
  username = "";
  subject = "";
  email = "";
  fullname = "";
  locale = "";
  tenantName = "";
  tenantLocale = "";
  token = "";
}
