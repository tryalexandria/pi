import { openAICompletionsApi } from "../api/openai-completions.lazy.ts";
import { envApiKeyAuth } from "../auth/helpers.ts";
import { createProvider, type Provider } from "../models.ts";
import { OVHCLOUD_MODELS } from "./ovhcloud.models.ts";

export function ovhcloudProvider(): Provider<"openai-completions"> {
	return createProvider({
		id: "ovhcloud",
		name: "OVHcloud AI Endpoints",
		baseUrl: "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1",
		auth: {
			apiKey: envApiKeyAuth("OVHcloud AI Endpoints access token", [
				"OVH_AI_ENDPOINTS_ACCESS_TOKEN",
				"OVHCLOUD_API_KEY",
			]),
		},
		models: Object.values(OVHCLOUD_MODELS),
		api: openAICompletionsApi(),
	});
}
