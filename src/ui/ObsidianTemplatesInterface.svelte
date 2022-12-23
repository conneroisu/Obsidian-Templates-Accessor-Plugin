<script lang="ts">
    class templateResult {
        name: string;
        image: string;
        description: string;
        url: string;
        tags: string[];
        constructor(name: string, image: string, description: string, url: string, tags: string[]) {
            this.name = name;
            this.image = image;
            this.description = description;
            this.url = url;
            this.tags = tags;
        }
    }
    let searchQuery = "";
    let searchResults = [];
    let searchSuggestionsCount = 0;
    let searchSuggestionsLimit = 10;
    let searchResultsCount = 0;
    let searchResultsLimit = 10;
    // Declare searchSuggestions as an array of strings
    let searchSuggestions: string[] = [];
    // Declare Results as an array of templateResult
    let Results: templateResult[] = [];

    let queryKeyWords = ["Dataview", "Charts", "Daily" ];

    function getDefaultSuggestions(): string[] {
        return [""];
    }
    function keyWordInQuery(keyWord: string): boolean {
        let temp = searchQuery.split(" ");
        for(let i = 0; i < temp.length; i++) {
            if(temp[i].toLowerCase() === keyWord.toLowerCase()) {
                return true;
            }
        }
        return false;
    }
    function getSearchSuggestions(query: string): void {
        let temp2 = "";
        let temp = searchQuery.split(" ");
        let matched = [];
        temp2 = temp[temp.length - 1];
        // For each keyword in queryKeyWords, check if the temp2 starts with any length of the keyword
        for(let i = 0; i < queryKeyWords.length; i++) {
                if(queryKeyWords[i].toLowerCase().includes(temp2.toLowerCase()) && !keyWordInQuery(queryKeyWords[i])) {
                    matched.push(queryKeyWords[i]);
                }else{
                    if(!temp[i]){
                        continue;
                    }
                    for(let j = 0; j < temp.length; j++) {
                        if(queryKeyWords[i].toLowerCase() === (temp[i].toLowerCase())) {
                            matched.remove(queryKeyWords[i]);
                        }
                    }

                } 
        }
        searchSuggestions = matched;
    }
    function SuggestionSelection(suggestion: string): void {
        let temp = searchQuery.split(" ");
        temp[temp.length - 1] = suggestion;
        searchQuery = temp.join(" ");

        searchSuggestions = [];
    }

    function getSearchResults(searchQuery: string, searchResults: templateResult, ): void {
        //TODO: Get search results from ObsidianTemplates Website
    }
</script>

<div>
    <h1 class="H1">Obsidian Templates</h1>
    <br>
    <div class="Search-Container">
        <!-- Adds Search Suggestions-->
        
        {#each searchSuggestions as suggestion}
            <span 
            class="Search-Suggestion">
                {suggestion}
                <span class="Search-Suggestion-Add"
                on:click={()=> SuggestionSelection(suggestion)}
                >+</span>
                <span> </span>
                <span class="Search-Suggestion-Ignore"
                on:click={()=> SuggestionSelection("-" + suggestion)}
                >-</span>
            </span>
        {/each}

        <!-- Adds Search text Input-->
        <input
            type="text"
            bind:value={searchQuery}
            on:input={()=> getSearchSuggestions(searchQuery)}
        />
        <!-- Adds Search Button -->
        <button class="Search-Button">
            Search
        </button>
    </div>


</div>


<style>
    .Search-Suggestion {
        background-color: beige;
        color: black;
        border: 1px solid #d3d3d3;
        border-radius: 5px;
        padding: 5px;
        margin: 5px;
        display: inline-block;
    }
    .Search-Suggestion-Add {
        background-color: beige;
    }
    .Search-Suggestion-Ignore {
        background-color: beige;
    }
    .H1 {
        margin-left: auto;
        margin-right: auto;
        text-align: center;
    }

    .Search-Container {
        margin-left: auto;
        margin-right: auto;
        text-align: center;
    }

</style>
