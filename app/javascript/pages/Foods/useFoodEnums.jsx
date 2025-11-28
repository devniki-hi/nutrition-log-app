import { usePage } from "@inertiajs/react";

export const useFoodEnums = () => {
  const page = usePage();
  return {
    unit_types: page.props.unit_types,
    sources: page.props.sources,
  };
};
