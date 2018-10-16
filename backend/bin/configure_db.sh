#!/bin/bash

echo "Configuring dragonstackdb"

dropdb -U whatapalaver dragonstackdb
createdb -U whatapalaver dragonstackdb

psql -U whatapalaver dragonstackdb < ./bin/sql/generation.sql
psql -U whatapalaver dragonstackdb < ./bin/sql/dragon.sql

echo "dragonstackdb configured"