// Napisz generyczny typ AddPrefixToKeys<T, P>, 
// który dodaje prefiks P do wszystkich kluczy w typie T

type AddPrefixToKeys<T, P extends string> = {

};

type Settings = {
  theme: string;
  language: string;
};

type PrefixedSettings = AddPrefixToKeys<Settings, "app_">;
