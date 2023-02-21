<template>
  <div class="py-4 container-fluid">
    <div class="mt-4 row">
      <div class="col-12">
        <div class="mb-4 card">
          <div class="p-3 pb-0 card-header">
            <h6 class="mb-1">Projects</h6>
            <p class="text-sm">Architects design houses</p>
          </div>
          <div class="p-3 card-body">
            <div class="row">
              <default-project-card
                  title="Modern"
                  :image="img1"
                  label="Project #2"
                  description="As Uber works through a huge amount of internal
                management turmoil."
                  :authors="[
                  {
                    image: team1,
                    name: 'Elena Morison',
                  },
                  {
                    image: team2,
                    name: 'Ryan Milly',
                  },
                  {
                    image: team3,
                    name: 'Nick Daniel',
                  },
                  {
                    image: team4,
                    name: 'Peterson',
                  },
                ]"
                  :action="{
                  color: 'success',
                  label: 'View Project',
                }"
              />

              <default-project-card
                  title="Scandinavian"
                  :image="img2"
                  label="Project #1"
                  description="Music is something that every person has his or her own
                      specific opinion about."
                  :authors="[
                  {
                    image: team3,
                    name: 'Nick Daniel',
                  },
                  {
                    image: team4,
                    name: 'Peterson',
                  },
                  {
                    image: team1,
                    name: 'Elena Morison',
                  },
                  {
                    image: team2,
                    name: 'Ryan Milly',
                  },
                ]"
                  :action="{
                  color: 'success',
                  label: 'View Project',
                }"
              />

              <default-project-card
                  title="Minimalist"
                  :image="img3"
                  label="Project #3"
                  description="Different people have different taste, and various types
                      of music."
                  :authors="[
                  {
                    image: team4,
                    name: 'Peterson',
                  },
                  {
                    image: team3,
                    name: 'Nick Daniel',
                  },
                  {
                    image: team1,
                    name: 'Elena Morison',
                  },
                  {
                    image: team2,
                    name: 'Ryan Milly',
                  },
                ]"
                  :action="{
                  color: 'success',
                  label: 'View Project',
                }"
              />

              <div class="mb-4 col-xl-3 col-md-6 mb-xl-0">
                <place-holder-card
                    :title="{ text: 'New project', variant: 'h5' }"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <authors-table/>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <projects-table/>
      </div>
    </div>
  </div>
</template>

<script>
import AuthorsTable from "./components/AuthorsTable";
import ProjectsTable from "./components/ProjectsTable";
import DefaultProjectCard from "@/views/components/DefaultProjectCard.vue";
import PlaceHolderCard from "@/examples/Cards/PlaceHolderCard.vue";


export default {
  name: "tables",
  components: {
    DefaultProjectCard,
    PlaceHolderCard,
    AuthorsTable,
    ProjectsTable,
  },
};
</script>
